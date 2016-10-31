package com.todo.backend.config;

import javax.persistence.EntityManager;
import javax.sql.DataSource;

import liquibase.integration.spring.SpringLiquibase;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.autoconfigure.jdbc.DataSourceProperties;
import org.springframework.boot.autoconfigure.liquibase.LiquibaseProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import com.querydsl.jpa.JPQLQueryFactory;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;


@Configuration
@EnableJpaRepositories("com.todo.backend.repository")
@EnableTransactionManagement
public class DatabaseConfiguration {

    private final Logger log = LoggerFactory.getLogger(DatabaseConfiguration.class);

    @Bean(destroyMethod = "close")
    public DataSource dataSource(DataSourceProperties dataSourceProperties, CustomProperties customProperties) {

        log.debug("Initializing datasource...");

        HikariConfig config = new HikariConfig();
        config.setDataSourceClassName(dataSourceProperties.getDriverClassName());
        config.addDataSourceProperty("url", dataSourceProperties.getUrl());
        config.addDataSourceProperty("user", dataSourceProperties.getUsername());
        config.addDataSourceProperty("password", dataSourceProperties.getPassword() == null ? "" : dataSourceProperties.getPassword());

        // mysql specific
        config.addDataSourceProperty("cachePrepStmts", customProperties.getDatasource().isCachePrepStmts());
        config.addDataSourceProperty("prepStmtCacheSize", customProperties.getDatasource().getPrepStmtCacheSize());
        config.addDataSourceProperty("prepStmtCacheSqlLimit", customProperties.getDatasource().getPrepStmtCacheSqlLimit());
        config.addDataSourceProperty("useServerPrepStmts", customProperties.getDatasource().isUseServerPrepStmts());

        return new HikariDataSource(config);
    }

    @Bean
    public SpringLiquibase liquibase(DataSource dataSource, DataSourceProperties dataSourceProperties, LiquibaseProperties liquibaseProperties) {

        log.debug("Initializing liquibase...");

        SpringLiquibase liquibase = new SpringLiquibase();
        liquibase.setDataSource(dataSource);
        liquibase.setChangeLog("classpath:liquibase/db-changelog.xml");
        return liquibase;
    }

    @Bean
    public JPQLQueryFactory factory(EntityManager entityManager) {
        return new JPAQueryFactory(entityManager);
    }

}
