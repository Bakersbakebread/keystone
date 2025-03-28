using Keystone.Interfaces;

namespace Keystone;

public record CommandItemsDto(string Alias, string Header, IEnumerable<CommandItem> CommandItems);

public class CommandRegistry(IEnumerable<ICommandProvider> commandProviders) : ICommandRegistry
{
    public IEnumerable<CommandItemsDto> GetAllCommands()
    {
        return commandProviders.Select(provider => new CommandItemsDto(
            provider.Alias,
            provider.Header,
            provider.GetCommandItems()
        ));
    }

    public bool ExecuteCommand(string actionKey, IDictionary<string, object>? parameters = null)
    {
        foreach (var provider in commandProviders)
        {
            if (provider.ExecuteCommand(actionKey, parameters))
            {
                return true;
            }
        }

        return false;
    }
}
