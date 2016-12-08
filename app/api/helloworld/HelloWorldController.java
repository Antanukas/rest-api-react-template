package api.helloworld;

import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Result;

public class HelloWorldController extends Controller {

    public static class Greeting {
        public String greet;
    }

    public Result helloWorld() {
        Greeting g = new Greeting();
        g.greet = "Greetings super nice Play user";
        return ok(Json.toJson(g));
    }
}
