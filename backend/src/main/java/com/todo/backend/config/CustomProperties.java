package com.todo.backend.config;

import org.springframework.boot.context.properties.ConfigurationProperties;


@ConfigurationProperties(prefix = "custom", ignoreUnknownFields = false)
public class CustomProperties {

    private String secretKey;

    private final Datasource datasource = new Datasource();

    private final Metrics metrics = new Metrics();

    public String getSecretKey() {
        return secretKey;
    }

    public void setSecretKey(String secretKey) {
        this.secretKey = secretKey;
    }

    public Datasource getDatasource() {
        return datasource;
    }

    public Metrics getMetrics() {
        return metrics;
    }

    public static class Datasource {

        private boolean cachePrepStmts = true;

        private int prepStmtCacheSize = 250;

        private int prepStmtCacheSqlLimit = 2048;

        private boolean useServerPrepStmts = true;

        public boolean isCachePrepStmts() {
            return cachePrepStmts;
        }

        public void setCachePrepStmts(boolean cachePrepStmts) {
            this.cachePrepStmts = cachePrepStmts;
        }

        public int getPrepStmtCacheSize() {
            return prepStmtCacheSize;
        }

        public void setPrepStmtCacheSize(int prepStmtCacheSize) {
            this.prepStmtCacheSize = prepStmtCacheSize;
        }

        public int getPrepStmtCacheSqlLimit() {
            return prepStmtCacheSqlLimit;
        }

        public void setPrepStmtCacheSqlLimit(int prepStmtCacheSqlLimit) {
            this.prepStmtCacheSqlLimit = prepStmtCacheSqlLimit;
        }

        public boolean isUseServerPrepStmts() {
            return useServerPrepStmts;
        }

        public void setUseServerPrepStmts(boolean useServerPrepStmts) {
            this.useServerPrepStmts = useServerPrepStmts;
        }
    }

    public static class Metrics {

        private final Logs logs = new Logs();

        private final Graphite graphite = new Graphite();

        public Logs getLogs() {
            return logs;
        }

        public Graphite getGraphite() {
            return graphite;
        }
    }

    public static class Logs {

        private boolean enabled = false;

        public boolean isEnabled() {
            return enabled;
        }

        public void setEnabled(boolean enabled) {
            this.enabled = enabled;
        }
    }

    public static class Graphite {

        private boolean enabled = false;

        private String host = "localhost";

        private int port = 2003;

        private String prefix = "backend";

        public boolean isEnabled() {
            return enabled;
        }

        public void setEnabled(boolean enabled) {
            this.enabled = enabled;
        }

        public String getHost() {
            return host;
        }

        public void setHost(String host) {
            this.host = host;
        }

        public int getPort() {
            return port;
        }

        public void setPort(int port) {
            this.port = port;
        }

        public String getPrefix() {
            return prefix;
        }

        public void setPrefix(String prefix) {
            this.prefix = prefix;
        }
    }

}