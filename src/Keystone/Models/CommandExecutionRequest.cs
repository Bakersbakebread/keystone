namespace Keystone.Models;

public class CommandExecutionRequest(string actionKey, Dictionary<string, object>? parameters)
{
    public string ActionKey { get; set; } = actionKey;
    public Dictionary<string, object>? Parameters { get; set; } = parameters;
}
