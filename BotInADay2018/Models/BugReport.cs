using BotInADay2018.Services;
using Microsoft.Bot.Builder.FormFlow;
using System;
using System.Collections.Generic;

namespace BotInADay2018.Models
{
    // Demo 2
    public enum BugType
    {
        Security = 1,
        Crash = 2,
        Power = 3,
        Performance = 4,
        Usability = 5,
        SeriousBug = 6,
        Other = 7
    }

    public enum Reproducibility
    {
        Always = 1,
        Sometimes = 2,
        Rarely = 3,
        Unable = 4
    }

    [Serializable]
    public class BugReport
    {
        public string Title;
        [Prompt("Enter a description for your report")]
        public string Description;
        [Prompt("What is your first name?")]
        public string FirstName;
        [Describe("Last Name")]
        public string LastName;
        [Prompt("What is the best date and time for a callback?")]
        public DateTime? BestTimeOfDayToCall;
        [Pattern("^(\\+\\d{1,2}\\s)?\\(?\\d{3}\\)?[\\s.-]\\d{3}[\\s.-]\\d{4}$")]
        public string PhoneNumber;
        [Prompt("Please list the bug areas that best describe your issue. {||}")]
        public List<BugType> Bug;
        public Reproducibility Reproduce;
        public static IForm<BugReport> QuickBuildForm()
        {
            return new FormBuilder<BugReport>().Build();
        }

        // Demo 3
        #region Demo 3 Version
        public static IForm<BugReport> BuildForm()
        {
            var contactRep = false;
            return new FormBuilder<BugReport>()
                        .Message("Please help us by filling out a log report.")
                        .Field(nameof(Title))
                        .Field(nameof(Description),
                            validate: async (state, value) =>
                            {
                                contactRep = true;
                                var sentiment = await SentimentAnalysisService.AnalyzeSentimentAsync(Guid.NewGuid().ToString(), value.ToString(), "en");
                                var result = new ValidateResult { IsValid = true, Value = value };
                                if (sentiment < 10)
                                    contactRep = true;
                                else
                                    contactRep = false;
                                return result;
                            })
                        .Message("It looks like this bug report is very bad, let me get you directly to an customer service rep", 
                            new ActiveDelegate<BugReport>((bugReport) => { return contactRep; }))
                        .Field(nameof(FirstName), new ActiveDelegate<BugReport>((bugReport) => { return !contactRep; }))
                        .Field(nameof(LastName), new ActiveDelegate<BugReport>((bugReport) => { return !contactRep; }))
                        .Field(nameof(BestTimeOfDayToCall), new ActiveDelegate<BugReport>((bugReport) => { return !contactRep; }))
                        .Field(nameof(PhoneNumber), new ActiveDelegate<BugReport>((bugReport) => { return !contactRep; }))
                        .Field(nameof(Bug), new ActiveDelegate<BugReport>((bugReport) => { return !contactRep; }))
                        .Field(nameof(Reproduce), new ActiveDelegate<BugReport>((bugReport) => { return !contactRep; }))
                        .Build();
        }
        #endregion
    }
}