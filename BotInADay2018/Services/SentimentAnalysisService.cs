using Microsoft.Azure.CognitiveServices.Language.TextAnalytics;
using Microsoft.Azure.CognitiveServices.Language.TextAnalytics.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BotInADay2018.Services
{
    static class SentimentAnalysisService
    {
        public static async Task<double> AnalyzeSentimentAsync(string id, string text, string language)
        {
            var document = new MultiLanguageInput()
            {
                Id = id,
                Text = text,
                Language = language
            };

            var returnValue = -1.0;
            ITextAnalyticsAPI client = new TextAnalyticsAPI();
            client.SubscriptionKey = Constants.TEXT_ANALYTICS_API_KEY;
            var request = new MultiLanguageBatchInput();
            request.Documents = new List<MultiLanguageInput>();
            request.Documents.Add(document);

            try
            {
                var response = await client.SentimentAsync(request);
                if (response.Documents.First().Score != null)
                    returnValue = (double)response.Documents.First().Score * 100;
            }
            catch (Exception ex)
            {
                returnValue = -1.0;
            }
            return returnValue;
        }
    }
}