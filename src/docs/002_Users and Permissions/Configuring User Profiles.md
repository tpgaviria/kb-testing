# Configuring User Profiles
---
The user profile is where you can configure the following settings: 

- [Contact Information](https://support.pagerduty.com/docs/configuring-a-user-profile#section-contact-information)
- [Notification Rules](https://support.pagerduty.com/docs/configuring-a-user-profile#section-notification-rules)
- [On-Call Handoff Notifications](https://support.pagerduty.com/docs/configuring-a-user-profile#section-on-call-handoff-notifications) 
- [User Settings](https://support.pagerduty.com/docs/configuring-a-user-profile#section-user-settings)
- [Changing or Resetting Passwords](https://support.pagerduty.com/docs/configuring-a-user-profile#section-changing-or-resetting-passwords)

To access your user profile, select your **profile icon** from the top right corner of your screen and select **My Profile** from the dropdown.

![](https://files.readme.io/c0a1f83-configuring-user-profiles-my-profile.png)

## Contact Information

The Contact Information tab (**User Icon** ➡️ **My Profile** ➡️ **Contact Information** tab) is where you can update the phone numbers, SMS numbers and email addresses where you would like to be contacted when an incident is assigned to you.

You can also view which devices are registered to receive push notifications from your user profile. Refer to this article to learn more about [adding a mobile device to receive push notifications](/docs/mobile-app#section-adding-a-mobile-device-for-push-notifications).

You can edit your **Name**, **Title**, **Bio**, and set the **Time Zone** that schedules, incident logs, and on-call times are shown in for your specific user profile.

### Add a Contact Method
1. Click **Add Phone Number**, **Add SMS Number**, and/or **Add Email Address**. You're able to include up to 10 different contact methods.
2. Enter contact information into the field. You have the option to configure a [phone number with an extension](/docs/notification-settings#section-dialing-extensions-and-introducing-a-delay-before-voicemail), if needed.
3. Click **Save**.

![](https://files.readme.io/1a37082-configuring-user-profiles-add-contact-info.png)

### View Recent User Activity

Underneath your contact information, you can view your activity for the past 14 days. This includes information about incidents that you acknowledged, resolved, or manually triggered through the web application.

![](https://files.readme.io/14e742c-configuring-user-profiles-activity-past-14-days.png)

## Notification Rules
The **Notification Rules** tab (**User Icon** ➡️ **My Profile** ➡️ **Notification Rules** tab) is where you can configure where and when you would like to be notified when a triggered incident is assigned to you. You have the option to create unique notification rules for both [high and low-urgency incidents](/docs/service-settings#section-high-and-low-urgency-incidents).

### Configure Notification Rules
1. Select **Add Notification Rule**.
2. Enter the number of minutes you would like to pass between the moment an incident is assigned to you and when PagerDuty sends the notification. This defaults to 0 minutes, which will notify you immediately.
3. Select the contact method that you would like to be notified on. You can use the same contact method with multiple notification rules.
4. Click **Save**.

<!-- theme: success -->

> ### Best Practices
>
> See our Community article on [best practices for setting up notification rules](https://community.pagerduty.com/t/notifications-setting-up-notification-rules/452).

### Status Update Rules
You can configure status update rules to receive notifications every time that a high-urgency incident that is assigned to you changes status (i.e. acknowledged, resolved, or escalated).
1. Under the section titled **When any of my high-urgency incidents change...**
2. Select whether you would like to be notified when an incident is acknowledged, resolved, or escalated, then select the contact method by which you would like to be notified.
3. Click **Save**.

If a notification has not been sent to a particular contact method for an incident yet at the time that a status update rule should be triggered, a status update notification will not be sent out. If you don't receive a status update, check that the ack, resolve, or escalate happened after you received your initial alert notification to that contact method.

Note that if you acknowledge or resolve your own incident, you will not receive a status update notification even if you have a rule configured.

### On-Call Handoff Notifications

On-call hand off notifications (OCHONs) can notify you up to 48 hours before you go on-call, off-call, or both. These notifications can only be sent as an SMS, push notification, or email.

<!-- theme: warning -->

> ### Requirements
>
> To send OCHONs, the following three conditions must be met:
>
> 1 . You must have on call handoff notifications configured in your User Profile (instructions below). 
> 2. You must be a target](https://support.pagerduty.com/docs/escalation-policies#section-escalation-targets-and-limitations) on an escalation policy.
> 3. The escalation policy must have OCHONs turned on. If the escalation policy is attached to a service, the OCHONs will always be turned on. If it is not attached to a service, follow instructions to turn them on in our [Escalation Policy Basics](https://support.pagerduty.com/docs/escalation-policies#section-on-call-handoff-notification-settings) article.

To configure on-call handoff notifications in your User Profile:

1. Under the section titled **Before I go on-call or off-call...** click **Add On-Call Handoff Notification Rule**
2. Enter the following information:
    - The number of hours prior, that you would like to be notified.
    - Whether you want to be notified before going on-call, off-call, or both.
    - The contact method where you want to receive the notification.
3. Click **Save**.

![](https://files.readme.io/f541a49-configuring-user-profiles-ochon-handoff-notification.png)

### Temporarily Disable Notifications

If you go on vacation or will be unavailable for a period of time we recommend [creating an override](/docs/editing-schedules#section-create-and-delete-overrides) for any schedule for which you are on-call. This ensures that there is coverage if an incident is assigned to you while you are not available to address the incident.

You can create overrides in the PagerDuty website, mobile app, or [via our API](doc:configuring-a-user-profile). You can also use [this Python script](https://gist.github.com/mdcollins05/8c639696a9608a76b755) to schedule overrides through our API when a user goes on vacation.

If you want to make sure that you do not receive any PagerDuty notifications when you go on vacation or are unavailable to be on-call, you will need to remove your notification rules.

To do this:
1. Click on your user icon at the top right corner of the screen and click on My Profile.
2. In your profile, click on the **Notification Rules** tab.
3. Under **When an incident is assigned to me...**, remove your notification rules by clicking on the **X** button to the right of each rule.

![](https://files.readme.io/ca84068-configuring-user-profiles-disable-notifications.png)

<!-- theme: info -->

> ### Note
>
> Removing notification rules does NOT mean that incidents cannot be assigned to you. Incidents can still be assigned and [delegated](/docs/adding-users-to-existing-incidents#section-reassign-or-delegate-an-incident) to you even if you do not have any notification rules as long as you are still on-call on a schedule or included in an escalation policy. By deleting your Notification Rules, you will simply avoid being notified for these incidents.
>
>Also note that removing your notification rules will NOT remove your contact methods. When you would like to receive PagerDuty notifications again, you can go back to your profile page and re-add your notification rules.

## User Settings

The User Settings tab (**User Icon** ➡️ **My Profile** ➡️ **User Settings** tab) is where you can configure the following:

- **Login Email** — This is the email that you use specifically to login to PagerDuty. This may be different from what you have configured in your notification rules. You can edit this by clicking the edit button to the left.
- **Password** — You can change your password by clicking **Change password…**. For more details, read our Changing or Resetting Passwords section.

<!-- theme: info -->

> ### Note
>
> If you are an Account Owner or Admin, you can [change another user's password](/docs/configuring-a-user-profile#section-change-another-user-s-password) here.

- **Role** — This is the user role associated with your user profile. You can read more about [user roles](/docs/user-roles#section-user-roles-in-your-account). Only the account owner or an admin on the account can update this.
- **Schedule Color** — Each user has a color associated with their profile which is used in the on-call schedule to quickly recognize the user. You can change this by clicking the edit button to the left.
- **Calendar** — This is for syncing your on-call schedules to calendar applications like Google Calendar, Apple Calendar, etc. We have instructions on [exporting your on-call schedules to your calendar application](/docs/schedules-and-exterior-tools#section-exporting-on-call-schedules-to-a-calendar-app).
- **Photo** — PagerDuty uses [Gravatar](http://en.gravatar.com/) to manage profile photos.

![](https://files.readme.io/f22973a-configuring-user-profiles-user-settings.png)

### Revoking Application Access
If you have authorized the PagerDuty mobile app or a third-party application, go to your user profile to view which apps you have authorized and to revoke access. All applications have continued access to your PagerDuty account and data once authorized.

On your user profile under **User Settings ➡️ Applications**, authorized apps are listed by name along with the date the authorization was created:

![](https://files.readme.io/ff94141-configuring-user-profiles-revoke-app-access.png)

Click the red **Revoke** button to revoke the application’s access to your account.
The page will refresh and you will see a banner confirming the application’s authorization has been revoked.

### Changing or Resetting Passwords

- [Reset Password](/docs/configuring-a-user-profile#section-reset-password)
- [Change Password](/docs/configuring-a-user-profile#section-change-password)
- [Change Another User's Password](/docs/configuring-a-user-profile#section-change-another-user-s-password)

#### Reset Password

If you forgot your password, you can reset it by sending yourself a password reset email.

<!-- theme: info -->

> ### Note
>
> You must be logged out to reset your password.

1. Access your account's login page (i.e. https://subdomain.pagerduty.com) and click **Forgot your password?**.
2. Enter your email address and click **Reset Password**.

<!-- theme: info -->

> ### Note
>
> If using SSO, you will need to contact your account owner to reset your password with your identity provider.

3. You will receive an email containing a link to reset your password.

<!-- theme: info -->

> ### Note
>
> The password reset URL expires 2 hours after it is sent out.

4. Follow the on-screen instructions to reset your password.

#### Change Password

If you know your password and are able to log in, you can change your password from your user profile.
1. Access your user profile by selecting your profile icon from the top right corner of your screen and select **My Profile** from the dropdown.

![](https://files.readme.io/f55f8f4-configuring-user-profiles-my-profile.png)

2. Navigate to the **User Settings** tab and click **Change Password…**

![](https://files.readme.io/60a69ba-configuring-user-profiles-change-my-password.png)

3. Follow the on screen instructions to change your password and click **Save**.

#### Change Another User's Password

Users with an Account Owner or Admin user role have the ability to change another user's password for them.
1. Navigate to **Configuration ➡️ Users**.
2. Click on the name of the user who's password you want to change.
3. Click the **User Settings** tab and select **Change Password…** 

![](https://files.readme.io/3940f97-configuring-user-profiles-change-another-users-password.png)

4. Enter *your* password, and then enter the user's new password and click **Save**.

## Hiding Contact Information
The Account Owner can optionally hide users' contact info (phone/SMS numbers and email addresses) in the web UI under **Configuration** ➡️ **Account Settings** ➡️ **Account Settings** tab ➡️ **Account Details**.

![](https://files.readme.io/3461e06-configuring-user-profiles-hide-contact-details.png)

With this option enabled, non-admin users will see other users' contact methods replaced mostly with asterisks (`*`).

![](https://files.readme.io/e33fb17-configuring-user-profiles-hidden-phone-number.png)

## Email Domain Restriction

Admins and Account Owners can choose to restrict users to only use domains that are in the **Email Domain Allow List** when they change (or create) their login or contact email addresses. The restriction applies to users when updating future email addresses; existing email addresses will continue to function. 

To restrict email addresses to specific domains, navigate to **Configuration** ➡️ **Account Settings** ➡️ **Account Settings** tab ➡️ **Email Domain Restriction**. Check the type of domain restriction you would like to enact: **Login Email Address**, **Contact/Notifications Email Address(es)** or both. Next, enter a comma separated list, without spaces, of domains including the top level domain. For example: `yourdomain.com,pagerduty.org`. Finally, click **Update Email Domain Settings** to save.

![](https://files.readme.io/167eec8-configuring-user-profiles-email-domain-restriction.png)

Users who attempt to enter email domains not specified in the Email Domain Allow List will now see the following dialog boxes when entering their login email and/or contact information email.

![](https://files.readme.io/47c4567-configuring-user-profiles-domain-dialog-login.png)

![](https://files.readme.io/0d87bc0-configuring-user-profiles-domain-dialog-contact-email.png)

