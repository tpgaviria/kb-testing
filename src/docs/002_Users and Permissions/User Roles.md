
# User Roles
---
<!-- theme: info -->

> ### User Role Tiers
>
> PagerDuty has two tiers of user roles depending on your account's plan. To determine which tier your role belongs to, click the **user icon** in the upper right of your account and select **My Profile**. If you see a tab that says **Permissions & Teams**, please visit our article on [Advanced Permissions](https://support.pagerduty.com/docs/advanced-permissions). If you only see the **User Settings** tab, please continue to use this article for reference.

## User Roles in Your Account

<div><table>
	<tbody>
		<tr>
			<td></td>
			<th>Limited Stakeholder*</th>
			<th>Full Stakeholder*</th>
			<th>Limited User</th>
			<th>User</th>
			<th>Admin</th>
			<th>Account Owner</th>
		</tr>
    <tr>
      <td><i>Only</i> has access to the status dashboard and their own user profile. Cannot view any other account objects.</td>
			<td>✓</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr>
			<td>Subscribe to incidents</td>
			<td>✓ **</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
		</tr>
		<tr>
			<td>View:<br>
∙ User profiles<br>
∙ Incidents<br>
∙ Schedules<br>
∙ Escalation policies<br>
∙ Services<br>
∙ Analytics<br>
∙ Postmortems
      </td>
			<td></td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
		</tr>
		<tr>
			<td>Can be added on schedules and escalation policies</td>
			<td></td>
			<td></td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
		</tr>
		<tr>
			<td>Create overrides for schedules that the user is on-call for</td>
			<td></td>
			<td></td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
		</tr>
		<tr>
			<td>Trigger, acknowledge, reassign, and resolve incidents</td>
			<td></td>
			<td></td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
		</tr>
    <tr>
			<td>Add/edit/delete postmortems</td>
			<td></td>
			<td></td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
		</tr>
		<tr>
			<td>Add/edit/delete:<br>
∙ On-call schedules<br>
∙ Escalation policies<br>
∙ Services<br>
∙ Maintenance windows<br>
∙ Teams<br>
∙ Response plays</td>
			<td></td>
			<td></td>
			<td></td>
			<td>✓</td>
			<td>✓</td>
			<td>✓</td>
		</tr>
		<tr>
			<td>Add new users</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td>✓</td>
			<td>✓</td>
		</tr>
		<tr>
			<td>Delete users (cannot delete the Account Owner)</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td>✓</td>
			<td>✓</td>
		</tr>
		<tr>
			<td>Edit a user's profile/password</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td>✓</td>
			<td>✓</td>
		</tr>
		<tr>
			<td>Create/delete REST API keys</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td>✓</td>
			<td>✓</td>
		</tr>
		<tr>
			<td>Access billing information</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td>✓</td>
		</tr>
		<tr>
			<td>Cannot be deleted</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td>✓</td>
		</tr>
		<tr>
			<td>Change the account owner</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td>✓</td>
		</tr>
		<tr>
			<td>Enable and edit Single Sign-On (SSO) properties\*</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td>✓</td>
		</tr>
		<tr>
			<td>Delete the account</td>
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
	width: 80%;
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

\**Available on Team, Business and Digital Operations pricing plans.*

\*** Limited Stakeholder and Full Stakeholder subscriptions to incidents are only available with our Modern Incident Response package. Please contact our [Sales Team](https://www.pagerduty.com/contact-sales/) if you would like to upgrade to a plan with this feature.*

### Limited Stakeholder Users

The Limited Stakeholder role provides users access to view and subscribe to the [status dashboard](https://support.pagerduty.com/docs/status-dashboard), view their own user profile, and does not show any other parts of PagerDuty, whether they are using the web UI or the mobile app. This access level is great for teams who don't need to see all of the alerts, schedules, and responder details in your account. Subscriptions to incidents are only available for Limited Stakeholders with our Modern Incident Response package. Please contact our [Sales Team](https://www.pagerduty.com/contact-sales/) if you would like to upgrade to a plan with this feature.

To set up a Limited Stakeholder user:

1. Go to **Configuration** ➡️ **Users**.
2. Click the **name** of the desired user and select the **Permissions & Teams** tab.
3.  Click **Edit** to the right of the user's Base Role and select **Limited Stakeholder** from the **Fixed** roles dropdown. Please contact your account representative if you want to purchase more Stakeholder licenses in our new, lower cost packages.

![](https://files.readme.io/ddfacb2-status-dashboard-edit-limited-stakeholder.png)

### Stakeholder Users

Stakeholder users are available by default on Digital Operations plans, and can [purchased as add-on users](https://www.pagerduty.com/pricing/) on Team and Business plans. Stakeholders can view objects in an account, but cannot make modifications. The intended use case for a Stakeholder is to be added as a [Subscriber](doc:adding-users-to-existing-incidents#section-add-and-notify-subscribers) to an incident — they will receive updates about the incident, but cannot take any action. Subscriptions to incidents are only available for Stakeholders with our Modern Incident Response package. Please contact our [Sales Team](https://www.pagerduty.com/contact-sales/) if you would like to upgrade to a plan with this feature.

Stakeholder licenses are not billed the same as full users. Please contact your Account Manager for more information.

## Checking Your User Role

To check what role you have, click the **user icon** in the upper right of the web app and select **My Profile**. Depending on your account's plan, your user role information will be found in the following tabs:
- Starter and Team plans will only have a **User Settings** tab, and you will find your **Role** information there. These role types are standard [User Roles](https://support.pagerduty.com/docs/user-roles#section-user-roles-in-your-account).
- Business and Digital Operations plans will have an additional **Permissions & Teams** tab where you can find information about your [Base Role](https://support.pagerduty.com/docs/advanced-permissions#section-base-roles) and any [Team Role(s)](https://support.pagerduty.com/docs/advanced-permissions#section-team-roles) or [Object Role(s)](https://support.pagerduty.com/docs/advanced-permissions#section-object-roles) that you may have. These role types are [Advanced Permissions](https://support.pagerduty.com/docs/advanced-permissions).

## Changing User Roles

<!-- theme: warning -->

> ### Required User Permissions
>
> Admin, Global Admin and Account Owner roles.
>
>If you're not sure what role you have, please read the above section, [Checking Your User Role](https://support.pagerduty.com/v1/docs/user-roles#section-checking-your-user-role).

If you would like your role changed, please contact an Admin, Global Admin or Account Owner on your PagerDuty account. Only the Account Owner can change their own role by [transferring account ownership](doc:change-account-owner) to another user in the account.

To change a user's role:
1. Go to **Configuration** ➡️ **Users**.
2. Click the **name** of the user you would like to update.
3. On their profile page, click the **User Settings** tab.
4. Click on the **Edit** icon to the right of the **Role** section. Select a new role from the dropdown.
5. Click **Save**.
