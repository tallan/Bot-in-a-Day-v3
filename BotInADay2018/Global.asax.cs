using Autofac;
using Microsoft.Bot.Builder.Azure;
using Microsoft.Bot.Builder.Dialogs;
using Microsoft.Bot.Builder.Dialogs.Internals;
using Microsoft.Bot.Connector;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Reflection;
using System.Web;
using System.Web.Http;
using System.Web.Routing;

namespace BotInADay2018
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            // Demo 1 - no connection string in the config
            if (string.IsNullOrWhiteSpace(Constants.AZURE_TABLE_STORAGE_CONNECTION_STRING))
            {
                // this is not actually needed at all, this just helps to indicate that in memory storage is being used.
                Conversation.UpdateContainer(
                builder =>
                {
                    var store = new InMemoryDataStore();
                    builder.Register(c => store)
                                .Keyed<IBotDataStore<BotData>>(AzureModule.Key_DataStore)
                                .AsSelf()
                                .SingleInstance();
                });
            }
            else
            {
                // a connection string exists in the constants file.  
                Conversation.UpdateContainer(
                builder =>
                {
                    builder.RegisterModule(new AzureModule(Assembly.GetExecutingAssembly()));
                    var store = new TableBotDataStore(Constants.AZURE_TABLE_STORAGE_CONNECTION_STRING);
                    builder.Register(c => store)
                        .Keyed<IBotDataStore<BotData>>(AzureModule.Key_DataStore)
                        .AsSelf()
                        .SingleInstance();
                });
            }

            GlobalConfiguration.Configure(WebApiConfig.Register);
        }
    }
}
