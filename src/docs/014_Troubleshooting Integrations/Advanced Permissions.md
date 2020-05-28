# Advanced Permissions
---
<!-- theme: info -->

> ### User Role Tiers
>
> PagerDuty has two tiers of user roles depending on your account's plan. To determine which tier your role belongs to, click the **user icon** in the upper right of your account and select **My Profile**. If you see a tab that says **Permissions & Teams**, please continue to use this article for reference. If you only see the **User Settings** tab, please visit our article on [User Roles](https://support.pagerduty.com/docs/user-roles).

Advanced Permissions allow you to specify the team-wide role that a user has on any given team, and also the level of access a user has to incidents and configuration objects ([services](https://support.pagerduty.com/docs/services-and-integrations#section-configuring-services-and-integrations), [escalation policies](https://support.pagerduty.com/docs/escalation-policies), and [schedules](https://support.pagerduty.com/docs/schedules)).

###  Benefits of Advanced Permissions 
- **Increased control and security** — Teams will be able to decide who is allowed to respond to incidents and manage the configuration for their team. Individual users will also be able to create and manage their own personal API Access Keys.
- **Prevent human error** — By empowering teams to control who has access to their incidents and configuration, accidents that might interfere with a team’s process can be mitigated.
- **Limit the visibility of sensitive information** — Teams will be able to set themselves as “Private” if their incidents or configuration contain sensitive information.

<!-- theme: info -->

> ### Availability of Advanced Permissions
>
> Advanced Permissions are available to customers on our Business and Digital Operations plans. Please [contact our Sales Team](https://www.pagerduty.com/contact-sales/) if you would like to upgrade to a plan with this feature.
>
>If you are already on a Business or Digital Operations plan but do not yet have advanced permissions enabled, contact [PagerDuty Support](mailto:support@pagerduty.com) to request enablement.
>
>Otherwise, if advanced permissions are not available to you, you can still use [Basic User Roles](doc:user-roles) to control what level of access your users have in your PagerDuty account.

## Overview

With advanced permissions, there are three different types of roles: base roles, team roles and object roles. Each role is unique and dictates what a user has access to. 

### Base Roles

All users in an account have a base role, and when a new user is added to an account, they must be assigned one. A base role indicates the default level of access a user has to incidents and configuration objects across the entire account. 

Base roles can either be **flexible** or **fixed**. A fixed base role is a base role that *cannot* be granted more or less permissions via a team role or an object role. A flexible role is a base role that *can* be granted more or less permissions via a team role or an object role. 

Each base role is described below with an indication if they are fixed or flexible in parenthesis: 

- **Account Owner** — (fixed) Full access to create, update, and delete objects, including a user’s permissions. Account owners can also access the Billing page. This role can only be granted to one person on an account.
- **Global Admin** — (fixed) Full access to create, update, and delete objects, including a user’s permissions.
- **Manager** — (flexible) Full access to create, update, and delete objects and all of their configuration. Depending on an Account Owner or Global Admin's discretion, these roles may be given lower access levels for specific objects. 
- **Responder** — (flexible) Can take action on incidents, create incidents for any team, and create overrides.
- **Observer** — (flexible) Can view objects, but cannot make any modifications. If an Observer is assigned an incident, they will temporarily have Responder access to that incident only, and can respond and reassign.
- **Full Stakeholder** — (fixed) Can view objects, but cannot make any modifications. Cannot be assigned or respond to incidents.
- **Limited Stakeholder** — (fixed) Can only view and subscribe to the status dashboard, view and edit their own user profile, and cannot view any other parts of PagerDuty. For more information, please read our section on [Limited Stakeholders](https://support.pagerduty.com/docs/user-roles#section-limited-stakeholder-users).
- **Restricted Access** — (flexible) By default, they cannot view or edit any objects on the account, with the exception of the **Alerts** page, until they are given a specific team or object role.

Here is a full list of actions to which each base role can take. For **flexible** roles, this table indicates the level of access each flexible base role has *by default* on an account *before* being given more or less permissions via a team or object role.<br>

<div><table>
	<tbody>
		<tr>
			<td rowspan="2"></td>
			<th colspan="4">Flexible</th>
			<th colspan="4">Fixed</th>
		</tr>
		<tr>
			<th>Restricted access</th>
			<th>Observer</th>
			<th>Responder</th>
			<th>Manager</th>
      <th>Limited Stakeholder</th>
			<th>Full Stakeholder</th>
			<th>Global Admin</th>
			<th>Account Owner</th>
		</tr>
    	<tr>
        <td><i>Only</i> has access to the status dashboard and their own user profile. Cannot view any other account objects.</td>
        <td></td>
			<td></td>
			<td></td>
			<td></td>
      <td>✓</td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
    <tr>
			<td>Subscribe to incidents</td>
      <td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
      <td>✓**</td>
			<td>✓**</td>
			<td>✓</td>
			<td>✓</td>
		</tr>
		<tr>
			<td>Create/delete personal REST API access keys/tokens matching permissions level</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
      <td></td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
		</tr>
		<tr>
			<td>Respond to incidents assigned to them</td>
      <td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
      <td></td>
			<td></td>
			<td>✓</td>
			<td>✓</td>
		</tr>
		<tr>
			<td>Be added on schedules and escalation policies</td>
      <td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
      <td></td>
			<td></td>
			<td>✓</td>
			<td>✓</td>
		</tr>
		<tr>
			<td>View all public teams, services, schedules, escalation policies, analytics and postmortems across the entire account</td>
      <td></td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
      <td></td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
		</tr>
		<tr>
			<td>Trigger and respond to incidents for any team</td>
      <td></td>
			<td></td>
			<td>✓</td>
			<td>✓</td>
      <td></td>
			<td></td>
			<td>✓</td>
			<td>✓</td>
		</tr>
		<tr>
			<td>Create/delete overrides on any schedule</td>
      <td></td>
			<td></td>
			<td>✓</td>
			<td>✓</td>
      <td></td>
			<td></td>
			<td>✓</td>
			<td>✓</td>
		</tr>
		<tr>
			<td>Add/edit/delete any:<br>
∙ On-call schedules<br>
∙ Schedule overrides<br>
∙ Escalation policies<br>
∙ Services<br>
∙ Maintenance windows<br>
∙ Teams<br>
∙ Response plays<br>
∙ Business Services</td>
      <td></td>
			<td></td>
			<td></td>
			<td>✓</td>
      <td></td>
			<td></td>
			<td>✓</td>
			<td>✓</td>
		</tr>
		<tr>
			<td>View/edit/delete all private teams and their services, schedules, and escalation policies across the entire account</td>
      <td></td>
			<td></td>
			<td></td>
			<td></td>
      <td></td>
			<td></td>
			<td>✓</td>
			<td>✓</td>
		</tr>
		<tr>
			<td>Create/delete global API access keys</td>
      <td></td>
			<td></td>
			<td></td>
			<td></td>
      <td></td>
			<td></td>
			<td>✓</td>
			<td>✓</td>
		</tr>
		<tr>
			<td>∙ Manage users<br>
∙ Add new users<br>
∙ Delete users<br>
∙ Edit users’ profiles and passwords<br>
∙ Configure users' base roles, team roles, and object roles</td>
      <td></td>
			<td></td>
			<td></td>
			<td></td>
      <td></td>
			<td></td>
			<td>✓</td>
			<td>✓</td>
		</tr>
		<tr>
			<td>∙ Administer the account<br>
∙ Change the account owner<br>
∙ Edit billing information<br>
∙ Add/edit/delete single sign on (SSO) properties<br>
∙ Delete the account<br>
∙ Change pricing plans</td>
      <td></td>
			<td></td>
			<td></td>
			<td></td>
      <td></td>
			<td></td>
			<td></td>
			<td>✓</td>
		</tr>
	</tbody>
</table></div>

<style>table , td, th {
	border: 1px solid #595959;
	border-collapse: collapse;
  font-size: 12px
}
td, th {
	padding: 3px;
	width: 100%;
	height: 25px;
}
th {
	background: #DCDCDC;
}
.even {
	background: #fbf8f0;
}
.odd {
	background: #fefcf9;
}
</style>

\*** Limited Stakeholder and Full Stakeholder subscriptions to incidents are only available with our Modern Incident Response package. Please contact our [Sales Team](https://www.pagerduty.com/contact-sales/) if you would like to upgrade to a plan with this feature.*

To find your base role, click the **user profile icon**, select **My Profile** and then select the **Permissions & Teams** tab.

<!-- theme: info -->

> ### Team Responder Base Role (Legacy)
>
> The Team Responder base role was deprecated as of 4/26/19. All users with this role have now been changed to a base account role of observer and their team roles will stay the same.

### Team Roles 

When a user is added to a [team](https://support.pagerduty.com/docs/teams), they will also be given a team role. A user’s team role indicates the level of access that they have on that specific team. There are three different types of team roles:

- **Observer** — Can only view the configuration objects and incidents associated with that team. 
- **Responder** — Everything an observer team role can do, PLUS they can respond to incidents associated with that team, trigger incidents for that team, and create/delete overrides on any schedules associated with that team.
- **Manager** — Everything a responder team role can do, PLUS they can add/edit/delete schedules, escalation policies, and services associated with that team. They can also edit and delete their team.

When a user is added to or associated with a team for the first time, their default team role will be dependent on their base role. Users can be added to a team manually or automatically by being added to an escalation policy that is associated with a team.

|Base Role | Default Team Role When Added to a Team | 
|---------|----------|
 |Observer**      | Observer | 
 |Stakeholder      | Observer | 
 |Restricted Access**      | Observer | 
 |Responder**|Responder|
 |Manager**|Manager|
 |Global Admin|Manager|
 |Account Owner|Manager|

**  Users with flexible base roles (Restricted Access, Observer, Responder, Manager) can have their default team roles changed to grant them more more or less permissions on a specific team.

To find your team role, click the **user profile icon**, select **My Profile** and then select the **Permissions & Teams** tab. Users may also have a primary team, which some organizations may need for billing purposes. Please read our section [Manage Primary Team](https://support.pagerduty.com/docs/teams#section-manage-primary-team) for more information.

### Object Roles

Objects roles are specific levels of access given for specific configuration objects (a [schedule](https://support.pagerduty.com/docs/schedules), [escalation policy](https://support.pagerduty.com/docs/escalation-policies), and/or [service](https://support.pagerduty.com/docs/services-and-integrations#section-configuring-services-and-integrations)) to an individual user. There are three types of object roles: **Observer**, **Responder**, and **Manager**.

||Schedule|Escalation Policy|Service|
|-|-|-|-|
|**Observer** |Can view|Can view|Can view and add notes to incidents triggered on this service|
|**Responder** |Can view schedules and create/delete overrides|Can view|Can view and respond to incidents triggered on this service|
|**Manager** |Can edit schedule and create/delete overrides|Can edit|Can edit, set maintenance windows, and respond to incidents triggered on this service|

To find your object-level role(s),  click the **user profile icon**, select **My Profile** and then select the **Permissions & Teams** tab.

### How Base, Team, and Object Roles Work Together

Base roles establish the level of access that a user has to everything across the entire account, whereas team and object roles gives users more or less access to specific configuration objects and incidents than what they would have access to at the account, or base role, level.

![](https://files.readme.io/d3af126-advanced-permissions-roles-together.png)

## Managing Roles

Base, team, and object roles can be managed by different users on the account based on their level of permissions. 

||Manager (team role)|Manager  (base role)|Global Admin (base role)|Account Owner (base role)|
|-|-|-|-|-|
|Can modify **team roles** of users on *their* team|✓|✓|✓|✓|
|Can modify **team roles** for any user on *any* team||✓|✓|✓|
|Can modify **base roles** for any user|||✓|✓|
|Can modify **object roles** for any user|||✓|✓|

### Updating Base Roles
Users with an Account Owner or Global Admin base role can update other users’ base roles. 

To update a user’s base role, go to the **Permissions & Teams** tab on their user profile and click **Edit** next to their Base Role.

![](https://files.readme.io/88b4dca-advanced-permissions-edit-base-role.png)

### Updating Team Roles

Users with an Account Owner, Global Admin, or Manager base role can update other users’ team roles. Users with a Manager *team role* can also update the team roles of users, but only for users on their team.

Users with an Account Owner, Global Admin, or Manager base role can update a user’s team role from the user’s profile page. Go to the **Permissions & Teams** tab on the user’s profile and select their team role from the drop-down menu under **Teams & Team Roles**.

![](https://files.readme.io/b7e0a97-advanced-permissions-edit-team-role-user-profile.png)

Users with a Manager *team role* are only able to update a user’s team role from their team’s page. Navigate to the **Configuration** menu and select **Teams**, then click on your **Team**, select the **Users** tab and then select the appropriate role under the **Team Role** column for that user. 

If a user is not yet part of a team, please visit our section on [manually adding users to a team](https://support.pagerduty.com/docs/teams#section-add-users-or-escalation-policies-to-a-team). 

![](https://files.readme.io/bbe12b0-advanced-permissions-team-view-edit-team-role.png)

### Updating Object Roles

Users with an Account Owner or Global Admin base role can update other users’ object roles. Note that object roles can only be given to users with a flexible base role (i.e. Restricted Access, Observer, Responder, Manager).

To update a user’s base role, go to the **Permissions & Teams** tab on their user profile and click **Edit** next to their Base Role.

![](https://files.readme.io/2a5ad9a-advanced-permissions-edit-base-role.png)

Under **Additional Permissions**, assign an object role to a specific schedule, escalation policy, and/or service.

![](https://files.readme.io/30bd983-advanced-permissions-object-permissions.png)

## Team Privacy

With advanced permissions, teams have the option to be set to **Private** or **Public**. By default, all teams are public.

- **Public** teams can be viewed and accessed by users outside of those teams.
- **Private** teams cannot be viewed and accessed by users outside of those teams, except for users with Global Admin or Account Owner base roles (these users have access to all private teams).

When a team is set to private, users who are *not* part of that team:

|Will NOT Be Able To|WILL Be Able To|
|-|-|
| - View that team’s schedules, escalation policies, services, and incidents.<br> - Find that team’s service or escalation policy when creating a new incident. <br>- Find that team’s escalation policy when reassigning or adding responders to an incident. <br>- Find that team when adding subscribers to an incident. <br>- Find that team on the team lens drop-down, on the **Configuration** ➡️ **Teams** page, or on the profile page of a user associated with that team|- Find the users associated with that private team on the **Configuration** ➡️ **Users** page<br>- Find the users on that private team when creating, reassigning, adding responders, or adding subscribers to an incident<br>- Find the users on that private team when creating a schedule override|

**Note**: Team privacy does not currently apply to the following pages or configuration objects:
- Response plays
- Postmortems
- Analytics
- Alerts
- Visibility

### Updating Team Privacy 
Users with an Account Owner,  Global Admin, or Manager base role can set a team to public or private. Users with a Manager *team role* specific to a team can also set that team to public or private. 

To update a team’s privacy, navigate to the **Configuration** menu, select **Teams** and then click on your desired **Team**. Navigate to the **Users** tab on that team’s page and set the **External Visibility** to either public or private.

![](https://files.readme.io/5ab255e-advanced-permissions-external-visibility.png)

## Responding to Incidents From Other Teams

The team that an incident is associated with is based on the [service](https://support.pagerduty.com/docs/services-and-integrations#section-configuring-services-and-integrations) where the incident was triggered. For example, if an incident is triggered on a service associated with the Network Operations team, then the incident is associated with the Network Operations team. If the incident is reassigned to an escalation policy or user that belongs to a different team, then the incident will still be associated with the Network Operations team.

At this point, any users who are assigned to the incident will be able to respond to it, even if they are not associated with the Network Operations team. However, they won’t see the incident on their incidents dashboard if filtering by My Teams. Any users who are *not* assigned to the incident AND who don’t have access to respond to incidents associated with the Network Operations team** will not be able to respond to the incident.

\** A user with an Observer or Restricted Access base role and no team role or object role specified for the Network Operations team or its objects.

With that being said, if there is a user who needs to be able to respond to incidents for all or multiple teams, make sure that the user has either of the following:

- A **Responder** base role - this will allow them to respond to incidents associated with any team
- A **Responder** or **Manager** role on any team for which they need to respond to incidents
- A **Responder** or **Manager** object role on any service for which they need to respond to incidents

## Rest API Access

All users can create personal REST API keys or tokens on the **User Settings** page of their user profile. Keys or tokens created this way will provide access to the REST API that matches the user’s permissions.
 
For example, a user with the base role of **Manager** can create a personal API key that will allow them to edit a schedule. However, they will not be able to add new users to the account because their level of access dictates that they cannot do this. 
 
[Global API access keys](https://support.pagerduty.com/v1/docs/using-the-api) (which can be either full access or read only) can be created and managed by users with a Global Admin or Account Owner base role.

## Migrating From Basic to Advanced Permission Roles

When an account migrates from Basic to Advanced Permissions, most basic user roles are automatically mapped to advanced permissions base roles.

|Basic Permissions|Advanced Permissions|
|-|-|
|Account Owner|Account Owner|
|Admin|Global Admin|
|Stakeholder|Stakeholder|
|User|Manager|
|Limited User|Responder|

<!-- theme: info -->

> ### Note
>
> Please note there is not an Observer role on [Basic Permissions](https://support.pagerduty.com/docs/user-roles).

## Roles in the REST API and SAML

When provisioning a user through the REST API or SAML, the user will by default be given the **Manager** (a.k.a. **User**) role, unless specified in the user's `role` property. The value set for it must be one of a set of fixed values that is recognized by our internal APIs, or our web services will respond with status `400 Invalid Request`.

The values of the `role` field of user records, and also the permissions system, are as follows:

|Title|Value|Flexible or Fixed|
|-|-|-|
|**Global Admin** |`admin`|Fixed|
|**Full Stakeholder**|`read_only_user`|Fixed|
|**Limited Stakeholder**|`read_only_limited_user`|Fixed|
|**Manager / User** |`user`|Flexible|
|**Responder**|`limited_user`|Flexible|
|**Observer**|`observer`|Flexible|
|**Restricted Access**|`restricted_access`|Flexible|
|**Account Owner** \*|`owner`|Fixed|

\* Cannot be created through API / SAML

<!-- theme: success -->

> ### Best Practices
>
> For more information on Advanced Permissions best practices, please visit our [Community post](https://community.pagerduty.com/t/best-practices-with-using-advanced-permissions/3297).
