﻿using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EHR.Controllers
{
    public class OptionTalkController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
