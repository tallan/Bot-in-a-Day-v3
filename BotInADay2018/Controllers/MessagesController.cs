using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using BotInADay2018.Dialogs;
using BotInADay2018.Models;
using Microsoft.Bot.Builder.Dialogs;
using Microsoft.Bot.Connector;

namespace BotInADay2018
{
    [BotAuthentication]
    public class MessagesController : ApiController
    {
        /// <summary>
        /// POST: api/Messages
        /// Receive a message from a user and reply to it
        /// </summary>
        public async Task<HttpResponseMessage> Post([FromBody]Activity activity)
        {
            if (activity.Type == ActivityTypes.Message)
            {
                switch (Constants.CurrentStep)
                {
                    // This is equivalent to just creating a new bot application with the project template
                    case (DemoStep.BaseBot):
                        await Conversation.SendAsync(activity, () => new Dialogs.RootDialog());
                        break;
                    case (DemoStep.Demo_1):
                        await Conversation.SendAsync(activity, () => new GreetingDialog());
                        break;
                    case (DemoStep.Demo_2):
                        await Conversation.SendAsync(activity, () => MainDialog.dialogDemo2);
                        break;
                    case (DemoStep.Demo_3):
                        await Conversation.SendAsync(activity, () => MainDialog.dialogDemo3);
                        break;
                    case (DemoStep.Demo_4):
                        await Conversation.SendAsync(activity, MakeLuisDialog);
                        break;
                }
            }
            else
            {
                HandleSystemMessage(activity);
            }
            var response = Request.CreateResponse(HttpStatusCode.OK);
            return response;
        }

        private Activity HandleSystemMessage(Activity message)
        {
            if (message.Type == ActivityTypes.DeleteUserData)
            {
                // Implement user deletion here
                // If we handle user deletion, return a real message
            }
            else if (message.Type == ActivityTypes.ConversationUpdate)
            {
                // Handle conversation state changes, like members being added and removed
                // Use Activity.MembersAdded and Activity.MembersRemoved and Activity.Action for info
                // Not available in all channels
            }
            else if (message.Type == ActivityTypes.ContactRelationUpdate)
            {
                // Handle add/remove from contact lists
                // Activity.From + Activity.Action represent what happened
            }
            else if (message.Type == ActivityTypes.Typing)
            {
                // Handle knowing tha the user is typing
            }
            else if (message.Type == ActivityTypes.Ping)
            {
            }

            return null;
        }

        internal static IDialog<BugReport> MakeLuisDialog()
        {
            return Chain.From(() => new LUISDialog(BugReport.BuildForm));
        }
    }
}