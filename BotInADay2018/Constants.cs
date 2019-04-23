using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BotInADay2018
{
    static class Constants
    {
        public const DemoStep CurrentStep = DemoStep.BaseBot;
        // Demo 1
        public const string AZURE_TABLE_STORAGE_CONNECTION_STRING = "";
        // Demo 3
        public const string TEXT_ANALYTICS_API_KEY = "";
        // Demo 4
        public const string LUIS_MODEL_ID = "";
        public const string LUIS_SUBSCRIPTION_KEY = "";
    }

    public enum DemoStep
    {
        BaseBot,
        Demo_1,
        Demo_2,
        Demo_3,
        Demo_4
    }
}