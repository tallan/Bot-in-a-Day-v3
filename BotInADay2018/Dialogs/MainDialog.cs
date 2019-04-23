using BotInADay2018.Models;
using Microsoft.Bot.Builder.Dialogs;
using Microsoft.Bot.Builder.FormFlow;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace BotInADay2018.Dialogs
{
    // Demo 2 || Demo 3
    public class MainDialog
    {
        // Used by Demo 2
        public static readonly IDialog<string> dialogDemo2 = Chain.PostToChain()
            .Select(msg => msg.Text)
            .Switch(
                 new RegexCase<IDialog<string>>(new Regex("^hi", RegexOptions.IgnoreCase), (context, txt) =>
                 {
                     return Chain.ContinueWith(new CompletableGreetingDialog(), AfterGreetingContinuation);
                 }),
                 new DefaultCase<string, IDialog<string>>((context, txt) =>
                 {
                     return Chain.ContinueWith(FormDialog.FromForm(BugReport.QuickBuildForm, FormOptions.PromptInStart), AfterGreetingContinuation);
                 }))
             .Unwrap()
             .PostToUser();

        private async static Task<IDialog<string>> AfterGreetingContinuation(IBotContext context, IAwaitable<object> res)
        {
            var token = await res;
            var name = "User";
            context.UserData.TryGetValue<string>("Name", out name);
            return Chain.Return($"Thank you for using the bot {name}");
        }

        #region Demo 3 Version
        // Used by Demo 3
        public static readonly IDialog<string> dialogDemo3 = Chain.PostToChain()
            .Select(msg => msg.Text)
            .Switch(
                 new RegexCase<IDialog<string>>(new Regex("^hi", RegexOptions.IgnoreCase), (context, txt) =>
                 {
                     return Chain.ContinueWith(new CompletableGreetingDialog(), AfterGreetingContinuation);
                 }),
                 new DefaultCase<string, IDialog<string>>((context, txt) =>
                 {
                     return Chain.ContinueWith(FormDialog.FromForm(BugReport.BuildForm, FormOptions.PromptInStart), AfterGreetingContinuation);
                 }))
             .Unwrap()
             .PostToUser();
        #endregion
    }
}