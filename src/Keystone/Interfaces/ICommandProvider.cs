namespace Keystone.Interfaces;

public interface ICommandProvider
{
    public string Alias { get; }
    public string Header { get; }
    public IEnumerable<CommandItem> GetCommandItems();

    /// <summary>
    /// Attempts to execute the command corresponding to the action key.
    /// Return true if execution was successful, false otherwise.
    /// </summary>
    bool ExecuteCommand(string actionKey, IDictionary<string, object>? parameters = null)
    {
        return false;
    }
}
