using System.Web.Optimization;
using System.Web.Optimization.React;

namespace React.Sample
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new BabelBundle("~/js/jsx")
                .Include("~/Scripts/jsx/*.jsx"));

            bundles.Add(new ScriptBundle("~/js/react")
                .Include("~/Scripts/react/react.min.js")
                .Include("~/Scripts/react/react-dom.min.js")
                );
        }
    }
}