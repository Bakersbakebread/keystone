namespace Keystone.Interfaces;

public class CommandItem
{
    public required string Label { get; set; }
    public string Icon { get; set; }
    public string Link { get; set; }
    public string ActionKey { get; set; }
}
