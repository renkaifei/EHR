using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using EHR.Models;
using EHRApp;
using EHRDomain;
using EHRUtil;

namespace EHR.Apis
{
    [ApiController]
    public class UserController : ControllerBase
    {
        private UserApp m_userApp;
        public UserController(UserApp userApp)
        {
            m_userApp = userApp;
        }

        [HttpPost]
        [Route("api/user/getone")]
        [Produces("application/json")]
        public async Task<OutputBaseViewModel> GetOneAsync([FromForm]int userId)
        {
            ResultViewModel<User> result = new ResultViewModel<User>();
            try
            {
                User user = await m_userApp.GetOneAsync(userId).ConfigureAwait(false);
                result.Data = user;
            }
            catch (Exception ex)
            {
                result.Status = 100001;
                result.Message = ex.GetMessage();
            }
            return result;
        }
    }
}
