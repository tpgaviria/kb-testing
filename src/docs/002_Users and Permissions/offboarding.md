# Offboarding
---
The offboarding feature allows administrators to easily deprovision users from their associated escalation policies, schedules and assigned incidents. When offboarding a user, a Global Admin or Account Owner can review their associated escalation policies and schedules, sending notifications to the user’s Team Manager that they need to be replaced by another user on those objects. Administrators can also reconcile triggered and/or acknowledged incidents that were assigned to the offboarded user by reassigning them to their affiliated escalation policy or resolving them. 

<!-- theme: warning -->

> ### Requirements
>
> PagerDuty accounts with [Advanced Permissions](https://support.pagerduty.com/docs/advanced-permissions), which come standard with Business and Digital Operations plans, have access to the offboarding feature.

![](https://files.readme.io/a607adf-offboarding-open-incidents.png)

## Configure Offboarding Settings

The offboarding feature is set to **When a user is deleted, No Action should be taken on open Incidents** by default. In order to take advantage of the incident reassignment capability, the Account Owner must change this setting.

To enable incident reassignment:

1. Navigate to **Configuration** ➡️ **Account Settings** ➡️ **User Offboarding**.
2. Under **Default setting for Incident reassignment during user deletion process**, select **When a user is deleted, open Incidents should be Reassigned to the most recent Escalation Policy**.

## Offboard a User

<!-- theme: warning -->

> ### Required User Permissions
>
> Global Admins and Account Owners can offboard a user.

1. Navigate to **Configuration** ➡️ **Users**.
2. Search for/locate the user that you wish to offboard and click **Delete** on the right hand side under Actions. 
3. On the next screen, depending on whether the user has any open incidents assigned to them, you will need to either **Reassign to EP** or **Resolve** their incidents. We recommend reassigning these incidents to their associated escalation policy, which will send a notification to a different user on that escalation policy. **Note**: If you choose to reassign and the user is the _only_ person on an escalation policy, the incident will be reassigned to the Account Owner. If the user does not have any open incidents assigned to them, you will not see this screen and you can continue to step 4.
4. On the next screen, you will be able to review the user’s associated escalation policies and schedules. You may proactively remove the user from these objects yourself, or, if you click **Next** it will send an email notification to Team Managers assigned to those escalation policies and schedules that they need to be replaced by another user on these objects. **Note**: If the user is not associated with any Team, or if they are on a Team without an assigned Manager, this notification email will be sent to Global Admins and the Account Owner. 
5. Once the above details have been reviewed, click **Delete User**. 

### Post-Offboarding

Once the user has been offboarded, the following changes will be visible in your PagerDuty account:

* Any incidents formerly assigned to the offboarded user will now either be resolved or reassigned to a different user based on your above selection.
* The offboarded user will be stubbed on their formerly-associated escalation policies and schedules, and there will be notification banners that will instruct Team Managers to replace them with different users: 

![](https://files.readme.io/202acf6-offboarding-ep-inactive-user-notification.png)

![](https://files.readme.io/fc94d2f-offboarding-schedule-inactive-user-notification.png)

* Team Managers assigned to the offboarded users’ escalation policies and schedules will receive a notification email instructing them to replace them with other users on those objects.

### Additional Configurations

When attempting to offboard a user via the web UI or via API, as mentioned above, the default behavior will be to automatically reassign incidents to the last escalation policy of the incident. You can *optionally* choose to turn off this behavior if it does not suit your processes by navigating to  **Account Settings** ➡️ **Offboarding Configuration**. 

By changing this configuration, you are still required to reassign or resolve any incidents from the user in order to offboard them.
