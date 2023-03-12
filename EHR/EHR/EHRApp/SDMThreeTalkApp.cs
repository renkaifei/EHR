using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using EHRRepository;
using EHRDomain;

namespace EHRApp
{
    public class SDMThreeTalkApp
    {
        private SDMThreeTalkRepository _sDMThreeTalkRepository;

        public SDMThreeTalkApp(SDMThreeTalkRepository sDMThreeTalkRepository)
        {
            this._sDMThreeTalkRepository = sDMThreeTalkRepository;
        }

        
    }
}
