using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EHR.Areas.Mobile.Controllers
{
    [Area("Mobile")]
    public class OncologyPortalController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
