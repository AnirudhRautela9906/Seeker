package com.seeker;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {
	
	@Value("${frontend.url}")
	private String frontendUrl;

	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**") // Apply CORS to all endpoints
				.allowedOrigins(frontendUrl) 
				.allowedMethods("GET", "POST", "PUT", "DELETE") // Specify allowed methods
				.allowedHeaders("Content-Type", "Authorization") // Specify allowed headers
				.allowedHeaders("Authorization")
	            .exposedHeaders("Authorization")
				.allowCredentials(true); // Allow credentials (cookies) to be included
	}
}
