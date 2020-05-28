---
title: "Using the Mobile App"
excerpt: ""
---
#New to the Mobile App?
The mobile app is available on the Apple Store and Google Play:
[block:html]
{
  "html": "<div><a href=\"https://apps.apple.com/us/app/pagerduty/id594039512\">\n<img border=\"0\" alt=\"Download on the App Store\" src=\"https://files.readme.io/179997a-Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg\">\n</a><a href='https://play.google.com/store/apps/details?id=com.pagerduty.android&hl=en_US&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img border=\"0\" alt='Get it on Google Play' src='https://files.readme.io/357da2b-google-play-badge.png' height=22% width=22%/></a>\n</div>\n"
}
[/block]
The mobile app allows you to trigger, acknowledge, and resolve incidents. You can add responders, add incident subscribers, send status updates, run response plays, reassign incidents and add notes. With schedules, you can easily create overrides and view your upcoming on call shifts. You can also customize your ringtones and set behavior for high and low urgency incidents all from your settings page. 
[block:callout]
{
  "type": "info",
  "title": "Supported Operating Systems and Configuration",
  "body": "The app is supported on iOS 11.0 and up, and Android 4.4 and up. We do not support rooted devices."
}
[/block]
#Mobile App Walkthrough

The walkthrough screenshots below are from our Android app, and the iOS app is very similar.

##Open Incidents Screen

When first opening the PagerDuty app, you will be prompted to enter your email address/password or subdomain to login.

After login, you should see the Open Incidents screen, similar to the following:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e844b8c-using-mobile-app-open-incidnets.png",
        "using-mobile-app-open-incidnets.png",
        1080,
        1920,
        "#0e2730"
      ]
    }
  ]
}
[/block]
The **Mine** tab shows all triggered and acknowledged incidents assigned to you. The **All** tab shows all triggered and acknowledged incidents in the account. If you have a [Responder role](https://support.pagerduty.com/docs/advanced-permissions) or higher, you will also see the **My Teams** tab, which will show all incidents assigned to your teams.

##Using the Mobile App During an Incident 
During an incident, you will be able to see all activity on the Open Incidents screen (:fa-bars: :fa-arrow-right: **Open Incidents**). 

###Acknowledging Incidents

If a triggered incident is assigned to you, the banner at the top will turn red. Your incidents will be under the **Mine** tab on the **Open Incidents** screen. You can acknowledge an incident by swiping left and tapping **Ack**, tapping the incident and tapping the **Ack** button on the incident details page, or you can acknowledge directly from a push notification. Push notifications will look similar to the one below. PagerDuty push notifications provide the incident number, service, and incident description.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a8a84f7-Screenshot_1555954330.png",
        "Screenshot_1555954330.png",
        1080,
        1920,
        "#393841"
      ]
    }
  ]
}
[/block]
Once you acknowledge the incident, the banner will turn yellow. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/9dab77f-Screenshot_1555954382.png",
        "Screenshot_1555954382.png",
        1080,
        1920,
        "#23261f"
      ]
    }
  ]
}
[/block]
###Snoozing Incidents
You will see **Ack** and **Resolve** buttons on the incident details page of a triggered incident. After an incident is acknowledged, the **Ack** button becomes a **Snooze** button. You can also [snooze](https://support.pagerduty.com/docs/editing-incidents#section-snooze-an-incident) an incident by swiping left on an acknowledged incident.

###Incident Details and Other Actions
Tap an incident to enter the incident details screen. The incident detail screen contains incident information, timeline and a status updates section.

- Tap the :fa-ellipsis-v:  to [run a response play](https://support.pagerduty.com/docs/response-automation), [change or add priority](https://support.pagerduty.com/docs/incident-priority), [add responders](https://support.pagerduty.com/docs/mobilizing-a-response#section-add-responders), unacknowledge, [reassign](https://support.pagerduty.com/docs/reassigning-and-delegating-incidents) or [add a note](https://support.pagerduty.com/docs/editing-incidents#section-add-a-note-to-an-incident). 
- Tap the **Timeline** tab to view the incident’s timeline.
- Tap the **Status Updates** tab to add incident subscribers and send status updates. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f7378fe-Screenshot_1555954409.png",
        "Screenshot_1555954409.png",
        1080,
        1920,
        "#1e2321"
      ]
    }
  ]
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0040b46-using-mobile-app-subscribers-status-updates.png",
        "using-mobile-app-subscribers-status-updates.png",
        1080,
        1920,
        "#26271e"
      ]
    }
  ]
}
[/block]
###Resolving Incidents
To resolve, tap the **Resolve** button or swipe right. You can customize your swipe actions within the :fa-bars: :fa-arrow-right: **Settings** menu. You can still add notes even after an incident has been resolved. To view resolved incidents, navigate to :fa-bars: :fa-arrow-right: **Resolved Incidents**.  
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/46ac36e-using-mobile-app-resolved-incident.png",
        "using-mobile-app-resolved-incident.png",
        1080,
        1920,
        "#0c1721"
      ]
    }
  ]
}
[/block]
##Trigger an Incident
To trigger an incident, open the app, navigate to :fa-bars: :fa-arrow-right: **Open Incidents** screen, tap the :fa-ellipsis-v: icon and select **New Incident**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/586554d-using-mobile-app-new-incident.png",
        "using-mobile-app-new-incident.png",
        1080,
        1920,
        "#0e252e"
      ]
    }
  ]
}
[/block]
Enter the following:

* **Name**: A meaningful name for the incident.
* **Description** *(optional)*: A meaningful description of the incident.
* **Service**: Select the affected service.
* **Assign to** *(optional)*: You may select an escalation policy or user other than the service's default escalation policy. This overrides who the incident is assigned to. 
* **Priority** *(optional)*: You may add a priority if necessary.


Tap **Create** to trigger the incident. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/6bd4d64-using-mobile-app-new-incident-details.png",
        "using-mobile-app-new-incident-details.png",
        1080,
        1920,
        "#202f40"
      ]
    }
  ]
}
[/block]
##Escalation Policies Screen
The Escalation Policies screen (:fa-bars: :fa-arrow-right: **Escalation Policies**) shows your escalation policies as well as your teams' and all of your organization’s escalation policies.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/d14d458-using-mobile-app-eps.png",
        "using-mobile-app-eps.png",
        1080,
        1920,
        "#091521"
      ]
    }
  ]
}
[/block]
Selecting an escalation policy will show who is on-call at each level. Select a user to see their contact info and schedule details.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ebbac9e-using-mobile-app-ep-users.png",
        "using-mobile-app-ep-users.png",
        1080,
        1920,
        "#0a1723"
      ]
    }
  ]
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c5cdfc8-using-mobile-app-ep-user-details.png",
        "using-mobile-app-ep-user-details.png",
        1080,
        1920,
        "#133135"
      ]
    }
  ]
}
[/block]
##Users Screen
The **Users** screen (:fa-bars: :fa-arrow-right: **Users**) lists users and their login email address. Selecting a user will show their contact methods and escalation policies where they are on-call. You can email, call, or SMS a user from your device by tapping on a user's email address or phone number.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/8dda30e-using-mobile-app-users-screen.png",
        "using-mobile-app-users-screen.png",
        1080,
        1920,
        "#0c1824"
      ]
    }
  ]
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c4b6e27-using-mobile-app-ep-user-details.png",
        "using-mobile-app-ep-user-details.png",
        1080,
        1920,
        "#133135"
      ]
    }
  ]
}
[/block]
##Settings Screen
From the **Settings** screen (:fa-bars: :fa-arrow-right: **Settings**), you can select a custom push notification sound, as well as sounds for high and low-urgency notifications. You can also change your notification behavior, configure your own swipe actions, contact support, or check for critical PagerDuty-related issues by tapping **PagerDuty System Status**. For more information on notification configuration options, check out our [Mobile Notification Settings](https://support.pagerduty.com/docs/mobile-notification-settings) article. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/362326c-using-mobile-app-settings.png",
        "using-mobile-app-settings.png",
        1080,
        1920,
        "#0f1b26"
      ]
    }
  ]
}
[/block]
You can also change how PagerDuty notifications are displayed on your device (i.e. how many notifications to show at once, whether or not you want notifications to be shown when your device is locked, etc.) by launching the **Settings** app and going to **Notifications** :fa-arrow-right: **PagerDuty**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/8e59bbe-using-mobile-app-android-notification-settings.png",
        "using-mobile-app-android-notification-settings.png",
        1080,
        1920,
        "#e9f0f9"
      ],
      "caption": "Android"
    }
  ]
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/3cf63b6-using-mobile-app-iphone-notification-settings.png",
        "using-mobile-app-iphone-notification-settings.png",
        640,
        1136,
        "#ebf0f1"
      ],
      "caption": "iOS"
    }
  ]
}
[/block]
##Live Updating
With incident live updating, incident pages and detail screens will stay up-to-date with the latest information and incident statuses, eliminating the need to manually refresh these pages in order to get updates. 

While on an incident list, when new incidents come in, a button will appear near the top of the screen indicating how many new incidents are ready to be shuffled into the list. After pressing that button, new incidents will be shuffled in and the view will move to the latest, highest priority incident. Alternatively, you can pull the screen down to refresh, where the button will disappear and the new incidents will be shuffled in, but the view will not change.

Live updating is **on** by default. If you would like to to disable Live Updating, navigate to the :fa-bars: :fa-arrow-right: **Settings** tab of the mobile app. Under the **Performance** section, toggle **Live Updating** off.
[block:callout]
{
  "type": "info",
  "title": "Note",
  "body": "While on live screens, push notifications will not show up in the app as to not distract users from triaging incidents. The push notifications will still be logged in your notifications list and in the incident’s timeline."
}
[/block]
##Scheduling Overrides
To schedule an override from the mobile app, navigate to :fa-bars: :fa-arrow-right: **Schedules** and select your desired schedule.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/be41c9c-using-mobile-app-schedules.png",
        "using-mobile-app-schedules.png",
        1080,
        1920,
        "#091520"
      ]
    }
  ]
}
[/block]
Click on the shift you would like to override.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ec0fbba-using-mobile-app-select-schedule.png",
        "using-mobile-app-select-schedule.png",
        1080,
        1920,
        "#112439"
      ]
    }
  ]
}
[/block]
Adjust the user and the time constraints as necessary, and tap **Override**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/09b9176-using-mobile-app-select-override-shift.png",
        "using-mobile-app-select-override-shift.png",
        1080,
        1920,
        "#0c1924"
      ]
    }
  ]
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e9fdbb1-using-mobile-app-schedule-override-complete.png",
        "using-mobile-app-schedule-override-complete.png",
        1080,
        1920,
        "#262434"
      ]
    }
  ]
}
[/block]
