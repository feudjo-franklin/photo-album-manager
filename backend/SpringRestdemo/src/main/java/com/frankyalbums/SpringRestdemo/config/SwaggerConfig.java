package com.frankyalbums.SpringRestdemo.config;

import org.springframework.beans.factory.annotation.Configurable;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.info.License;

@Configurable
@OpenAPIDefinition(
    info = @Info(
        title = "Demo API",
        version = "Version 1.0",
        contact = @Contact(
            name = "Franklin",
            email = "franklinfeudjo1@gmail.com",
            url = "https://www.frankyeasy.com"
        ),
        license = @License(
            name = "Apache 2.0",
            url = "https://www.apache.org/licenses/LICENSE-2.0"
        ),
        termsOfService = "https://www.frankyeasy.com/terms",
        description = "Spring Boot Restful API demo by Franklin"
    )
)
public class SwaggerConfig {
    
}
