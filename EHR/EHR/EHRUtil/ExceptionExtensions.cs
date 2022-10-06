using System;

namespace EHRUtil
{
    public static class ExceptionExtensions
    {
        public static string GetMessage(this Exception ex)
        {
            return ex.InnerException == null ? ex.Message : ex.InnerException.Message;
        }
    }
}
