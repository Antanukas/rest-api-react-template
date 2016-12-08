package api.helloworld;

import java.time.Clock;

import com.google.inject.AbstractModule;

/**
 * This class is a Guice module that tells Guice how to bind several
 * different types. This Guice module is created when the Play
 * application starts.
 *
 * Play will automatically use any class called `HelloWorldModule` that is in
 * the root package. You can create modules in other locations by
 * adding `play.modules.enabled` settings to the `application.conf`
 * configuration file.
 */
public class HelloWorldModule extends AbstractModule {

    @Override
    public void configure() {
        bind(Clock.class).toInstance(Clock.systemDefaultZone());
    }

}
