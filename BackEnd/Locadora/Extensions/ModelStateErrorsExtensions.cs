using Locadora.Domain.Entities;
using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace Locadora.Extensions
{
    public static class ModelStateErrorsExtensions
    {
        public static List<Error> GetErrors(this ModelStateDictionary modelState)
        {
            var errors = new List<Error>();

            foreach (var erros in modelState.Values)
            {
                erros.Errors.ToList().ForEach(error => errors.Add(new Error(error.ErrorMessage)));
            }
            return errors;
        }
    }
}
