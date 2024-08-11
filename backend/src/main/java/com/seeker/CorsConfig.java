import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig {

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")  // Apply to all paths
                        .allowedOrigins("http://example.com")  // Replace with your client domain
                        .allowedMethods("GET", "POST", "PUT", "DELETE")  // Specify allowed methods
                        .allowedHeaders("*")  // Allow any headers
                        .allowCredentials(true);  // Allow credentials (cookies, authorization headers, etc.)
            }
        };
    }
}
