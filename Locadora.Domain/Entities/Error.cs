﻿namespace Locadora.Domain.Entities
{
    public class Error
    {
        public Error(string message)
        {
            Message = message;
        }

        public string Message { get; set; }
    }
}
