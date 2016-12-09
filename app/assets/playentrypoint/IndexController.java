package assets.playentrypoint;

import java.util.regex.Pattern;

import com.google.inject.Inject;
import controllers.Assets;
import play.mvc.Controller;

/**
 * In order to use client side routing without # we need to make sure that on page reload
 * Play treats all URLs not starting with /api as React routes thus delegating to client side React Router
 */
public class IndexController extends Controller {

    private final Assets assets;

    @Inject
    public IndexController(controllers.Assets assets) {
        this.assets = assets;
    }

    //Maybe makes sense to move this to config
    private final Pattern ASSET_REGEX = Pattern.compile(".*\\.(js|img|ico|html|map)");

    public play.api.mvc.Action<play.api.mvc.AnyContent> assetAt(String path) {
        if (ASSET_REGEX.matcher(path).matches()) {
            return assets.at("/public", path, false);
        } else {
            return assets.at("/public", "index.html", false);
        }
    }
}
