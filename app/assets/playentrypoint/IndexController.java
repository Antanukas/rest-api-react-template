package assets.playentrypoint;

import assets.playentrypoint.html.index;
import play.mvc.*;

/**
 * In order to use client side routing without # we need to make sure that on page reload
 * Play treats all URLs not starting with /api as React routes thus delegating to client side React Router
 */
public class IndexController extends Controller {

    public Result index() {
        return ok(index.render("Rest Api React Template"));
    }

    public Result wildcardIndex(String path) {
        return ok(index.render("Rest Api React Template"));
    }
}
