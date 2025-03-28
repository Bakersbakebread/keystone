using Asp.Versioning;
using Keystone.Interfaces;
using Keystone.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Umbraco.Cms.Core.Models.Membership;
using Umbraco.Cms.Core.Security;

namespace Keystone.Controllers;

[ApiVersion("1.0")]
[ApiExplorerSettings(GroupName = "Keystone")]
public class KeystoneApiController(IBackOfficeSecurityAccessor backOfficeSecurityAccessor, ICommandRegistry commandRegistry)
    : KeystoneApiControllerBase
{
    // Endpoint to retrieve all commands.
    [HttpGet("commands")]
    [ProducesResponseType(typeof(IEnumerable<CommandItemsDto>), StatusCodes.Status200OK)]
    public IActionResult GetCommands()
    {
        IEnumerable<CommandItemsDto> commands = commandRegistry.GetAllCommands();
        return Ok(commands);
    }

    // Endpoint to execute a specific command.
    [HttpPost("execute")]
    public IActionResult ExecuteCommand([FromBody] CommandExecutionRequest request)
    {
        var executed = commandRegistry.ExecuteCommand(request.ActionKey, request.Parameters);
        if (executed)
        {
            return Ok(new { success = true });
        }

        return NotFound(new { success = false, message = "Command not found or failed to execute" });
    }

    [HttpGet("ping")]
    [ProducesResponseType<string>(StatusCodes.Status200OK)]
    public string Ping()
    {
        return "Pong";
    }

    [HttpGet("whatsTheTimeMrWolf")]
    [ProducesResponseType(typeof(DateTime), 200)]
    public DateTime WhatsTheTimeMrWolf()
    {
        return DateTime.Now;
    }

    [HttpGet("whatsMyName")]
    [ProducesResponseType<string>(StatusCodes.Status200OK)]
    public string WhatsMyName()
    {
        // So we can see a long request in the dashboard with a spinning progress wheel
        Thread.Sleep(2000);

        var currentUser = backOfficeSecurityAccessor.BackOfficeSecurity?.CurrentUser;
        return currentUser?.Name ?? "I have no idea who you are";
    }

    [HttpGet("whoAmI")]
    [ProducesResponseType<IUser>(StatusCodes.Status200OK)]
    public IUser? WhoAmI()
    {
        return backOfficeSecurityAccessor.BackOfficeSecurity?.CurrentUser;
    }
}
