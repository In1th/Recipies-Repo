package app.recipe.backend;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.init.ResourceDatabasePopulator;

@Configuration
public class DatabaseInitializationConfig {
    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Bean
    public ApplicationRunner initializer(DataSource dataSource) {
        return new ApplicationRunner() {

            @Override
            public void run(ApplicationArguments args) throws Exception {
                Boolean isCategoryTableCreated = jdbcTemplate.queryForObject(
                        "SELECT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'category')", Boolean.class);

                Boolean isCategoryTableEmpty = false;
                if (Boolean.TRUE.equals(isCategoryTableCreated)) {
                    isCategoryTableEmpty = jdbcTemplate.queryForObject(
                            "SELECT NOT EXISTS (SELECT 1 FROM category)", Boolean.class);
                }

                if (Boolean.TRUE.equals(isCategoryTableEmpty)) {
                    ResourceDatabasePopulator dataPopulator = new ResourceDatabasePopulator(
                            new ClassPathResource("data.sql"));
                    dataPopulator.execute(dataSource);
                }
            }
        };
    }
}