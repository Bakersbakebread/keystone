using Keystone.Interfaces;

namespace Keystone.Providers;

public class SettingsSectionLinksProvider : ICommandProvider
{
    public string Alias => "settingsSectionLinks";
    public string Header => "Site settings";
    public IEnumerable<CommandItem> GetCommandItems()
    {
        return
        [
            new CommandItem
            {
                Icon = "icon-handshake",
                Label = "Go to <strong>Models Builder</strong>",
                Link = "/umbraco/section/settings/dashboard/models-builder",
            },
            new CommandItem
            {
                Icon = "icon-file-cabinet",
                Label = "Go to Examine Management",
                Link = "umbraco/section/settings/dashboard/examine-management",
            },
            new CommandItem
            {
                Icon = "icon-shopping-basket",
                Label = "Go to Ecommerce",
                Link = "https://bouncingdvdlogo.com/",
            },
            new CommandItem
            {
                Icon = "icon-hearts",
                Label = "Go to Health Checks",
                Link = "/umbraco/section/settings/dashboard/health-check",
            }
        ];
    }
}
