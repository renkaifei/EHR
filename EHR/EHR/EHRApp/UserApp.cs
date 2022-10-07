using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Microsoft.EntityFrameworkCore;

using EHRRepository;
using EHRDomain;

namespace EHRApp
{
    public class UserApp
    {
        private UserRepository m_userRepository;

        public UserApp(UserRepository userRepository)
        {
            m_userRepository = userRepository;
        }

        public async Task<User> GetOneAsync(int userId)
        {
            User user = await m_userRepository.GetOne(userId).AsNoTracking()
                .FirstOrDefaultAsync().ConfigureAwait(false);
            return user;
        }
    }
}
