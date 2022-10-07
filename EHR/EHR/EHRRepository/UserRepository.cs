using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using EHRRepository.DbContexts;
using EHRDomain;

namespace EHRRepository
{
    public class UserRepository
    {
        private EHRDbContext m_dbContext;

        public UserRepository(EHRDbContext dbContext)
        {
            m_dbContext = dbContext;
        }

        public IQueryable<User> GetOne(int userId)
        {
            IQueryable<User> query = m_dbContext.Users;
            if(userId != 0) query = query.Where(item => item.Id == userId);
            return query;
        }
    }
}
