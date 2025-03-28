namespace Keystone.Interfaces;

public interface ICommandRegistry
{
    IEnumerable<CommandItemsDto> GetAllCommands();
    bool ExecuteCommand(string actionKey, IDictionary<string, object>? parameters = null);
}
