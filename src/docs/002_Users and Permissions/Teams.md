# Teams
---
Teams allow users to customize the UI so that they only see information relevant to specific escalation policies, or groups of escalation policies. For example, a DevOps team member may only want to see the users, incidents, schedules and services associated with DevOps escalation policies. Likewise, a Support team manager may only want to see information relevant to his or her team.

Teams are available on Business and Digital Operations plans. Please [contact our sales team](mailto:sales@pagerduty.com) if you would like to upgrade to a plan featuring Teams.

## Create a Team

<!-- theme: warning -->

> ### Required User Permissions
>
> Manager, Global Admin or Account Owner roles on plans with [Advanced Permissions](https://support.pagerduty.com/docs/advanced-permissions).
>
>If you're not sure what role you have, or if you need your permissions adjusted, visit our sections on [Checking Your User Role](https://support.pagerduty.com/v1/docs/user-roles#section-checking-your-user-role) or [Changing User Roles](https://support.pagerduty.com/docs/user-roles#section-changing-user-roles).

It is recommended that you create schedules and escalation policies before creating a Team. When you add an escalation policy to a Team, the escalation policy's users and schedules will be automatically assigned to your Team. For guidance on the basics of configuring your account, check out our [Quick Start Guide](https://support.pagerduty.com/docs/quick-start-guide).

1. Go to the **Configuration** menu and select **Teams**.

2. Click **New Team**. Name the team and select the appropriate escalation policy(s). Then click **Save**.

![](https://files.readme.io/b2f9b53-quick-start-guide-create-team.png)

<!-- theme: info -->

> ### Note
>
> You can add up to 100 unique escalation policies per team.

## Editing Teams

You can view all teams under **Configurations** ➡️ **Teams**.

You can edit or delete an existing team by clicking on the ⚙️. 

![](https://files.readme.io/37ba4da-teams-edit-team.png)

### Add Users or Escalation Policies to a Team

To manually add a user or escalation policy to a team, click the ⚙️ and select **Edit**. Type the user's name or escalation policy name into the **Users** or **Escalation Policies** fields, select the name when it populates and then click **Save**. 

![](https://files.readme.io/02a22da-teams-add-users-eps.png)

<!-- theme: info -->

> ### Note
>
> Users can be on multiple teams, but escalation policies can only be associated with one team.

### Edit Team Roles 

To change a user's role within a Team, go to **Configuration** ➡️ **Teams** and click on the **team name**. Under **Team Role**, click the **dropdown** and select a new role. 

All other edits to Schedules, Escalation Policies and Services can be made on their corresponding tabs:

![](https://files.readme.io/ed18c83-teams-edit-team-role.png)

### Remove Users or Escalation Policies From a Team

To remove users or escalation policies from a team, navigate to **Configuration** ➡️ **Teams** ➡️ ⚙️ for your desired team ➡️ **Edit**. Click the **x** next to the user name or escalation policy you wish to remove and click **Save**.

## Manage Primary Team

Some organizations may want users to have primary teams for billing purposes. To designate a user's primary team:

1. Navigate to **Configuration**, select **Users** and click the **name** of the desired user. 
2. Select the **Permissions & Teams** tab and click the **Manage primary team** button in the Teams & Team Roles section. 
3. On the next screen you will have the option to search and select the user's desired primary team, or you may remove one by clicking the **Unset primary team** button. Click **Confirm Selection** to save. 

![](https://files.readme.io/7038556-teams-manage-primary-team.png)

4. You will now be able to see the user's primary team in the Teams & Team Roles section.

![](https://files.readme.io/8808902-teams-primary-team-saved.png)

<!-- theme: info -->

> ### Note
>
> A user must already be a team member of the selected primary team. You may add users to a  New Team or add a user to an existing team through the Teams page to select a primary team that the user is not already on.

## Filter by Teams

To filter the view in PagerDuty use the drop-down in the top right corner to quickly bring back team-specific information. You can choose to view all teams, any teams you're associated with, or a specific user, depending on your permissions.

<!-- theme: info -->

> ### Note
>
> If a user is not on any teams they will still be visible by selecting **All Teams**.

To quickly see all users in a team go to the team drop-down menu and select the DevOps team:

![](https://files.readme.io/b939a6b-teams-team-view-only.png)

Go to **Configuration** ➡️ **Users** and only Users associated with that selected team will appear.

Similarly, you can filter escalation policies associated with that team by selecting **Escalation Policies** from the **Configuration** menu as well as the **Incidents** page.

<!-- theme: info -->

> ### Note
>
> There is a limit of 500 users per team.