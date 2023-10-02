using System.Web;
using System.Web.Mvc;

namespace BuiltSight_UI_edit
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
