# This is a phoenixframework project
# This is a MVC Framework with react rend the main container
# Install https://elixir-lang.org/install.html
mix deps.get

# Start postgres and clickhouse docker first
# Run Application
mix phx.server

## Update dashboard layout
/assets/js/dashboad/realtime.js

# View files
## Entery file
/lib/templates/stats/stats.html.eex
