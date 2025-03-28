using Keystone.Interfaces;

namespace Keystone.Providers;

public class DeveloperLinksProvider : ICommandProvider
{
    public string Alias => "developerLinks";
    public string Header => "Developer links";

    public IEnumerable<CommandItem> GetCommandItems()
    {
        return new List<CommandItem>
        {
            new()
            {
                Icon = "icon-folder",
                Label = "Create new doctype",
                Link =
                    "/umbraco/section/settings/workspace/document-type/create/parent/document-type-root/null/view/design/root"
            },
            new()
            {
                Icon = "icon-folder",
                Label = "Create new data type",
                Link =
                    "/umbraco/section/settings/workspace/data-type/create/parent/data-type-root/null/view/details"
            },
            new()
            {
                Icon = "icon-ordered-list",
                Label = "Go to log viewer",
                Link = "/umbraco/section/settings/workspace/logviewer/view/overview"
            }
        };
    }
}
