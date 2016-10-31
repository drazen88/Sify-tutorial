package com.todo.backend.config;

import com.codahale.metrics.MetricRegistry;
import com.codahale.metrics.Slf4jReporter;
import com.codahale.metrics.graphite.Graphite;
import com.codahale.metrics.graphite.GraphiteReporter;
import com.codahale.metrics.health.HealthCheckRegistry;
import com.codahale.metrics.jvm.*;
import com.ryantenney.metrics.spring.config.annotation.EnableMetrics;
import com.ryantenney.metrics.spring.config.annotation.MetricsConfigurerAdapter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.annotation.PostConstruct;
import javax.inject.Inject;
import java.lang.management.ManagementFactory;
import java.net.InetSocketAddress;
import java.util.concurrent.TimeUnit;


@Configuration
@EnableMetrics(proxyTargetClass = true)
public class MetricsConfiguration extends MetricsConfigurerAdapter {

    private final Logger log = LoggerFactory.getLogger(MetricsConfiguration.class);

    private static final String PROP_METRIC_REG_JVM_MEMORY = "jvm.memory";
    private static final String PROP_METRIC_REG_JVM_GARBAGE = "jvm.garbage";
    private static final String PROP_METRIC_REG_JVM_THREADS = "jvm.threads";
    private static final String PROP_METRIC_REG_JVM_FILES = "jvm.files";
    private static final String PROP_METRIC_REG_JVM_BUFFERS = "jvm.buffers";
    private static final String METRICS = "metrics";

    private final MetricRegistry metricRegistry = new MetricRegistry();

    private final HealthCheckRegistry healthCheckRegistry = new HealthCheckRegistry();

    @Inject
    private CustomProperties customProperties;

    @Override
    @Bean
    public MetricRegistry getMetricRegistry() {
        return metricRegistry;
    }

    @Override
    @Bean
    public HealthCheckRegistry getHealthCheckRegistry() {
        return healthCheckRegistry;
    }

    @PostConstruct
    public void init() {

        log.debug("Registering JVM gauges");

        metricRegistry.register(PROP_METRIC_REG_JVM_MEMORY, new MemoryUsageGaugeSet());
        metricRegistry.register(PROP_METRIC_REG_JVM_GARBAGE, new GarbageCollectorMetricSet());
        metricRegistry.register(PROP_METRIC_REG_JVM_THREADS, new ThreadStatesGaugeSet());
        metricRegistry.register(PROP_METRIC_REG_JVM_FILES, new FileDescriptorRatioGauge());
        metricRegistry.register(PROP_METRIC_REG_JVM_BUFFERS, new BufferPoolMetricSet(ManagementFactory.getPlatformMBeanServer()));

        if (customProperties.getMetrics().getLogs().isEnabled()) {

            log.info("Initializing Metrics Log reporting...");

            final Slf4jReporter reporter = Slf4jReporter.forRegistry(metricRegistry).outputTo(LoggerFactory.getLogger(METRICS)).convertRatesTo(TimeUnit.SECONDS)
                    .convertDurationsTo(TimeUnit.MILLISECONDS).build();
            reporter.start(1, TimeUnit.HOURS);
        }

        if (customProperties.getMetrics().getGraphite().isEnabled()) {

            log.info("Initializing Metrics Graphite reporting...");

            final String host = customProperties.getMetrics().getGraphite().getHost();
            final Integer port = customProperties.getMetrics().getGraphite().getPort();
            final String prefix = customProperties.getMetrics().getGraphite().getPrefix();
            final Graphite graphite = new Graphite(new InetSocketAddress(host, port));
            final GraphiteReporter graphiteReporter = GraphiteReporter.forRegistry(metricRegistry).convertRatesTo(TimeUnit.SECONDS).convertDurationsTo(TimeUnit.MILLISECONDS).prefixedWith(prefix)
                    .build(graphite);
            graphiteReporter.start(1, TimeUnit.HOURS);
        }
    }
}