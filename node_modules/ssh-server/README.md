ssh-server
==========



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/ssh-server.svg)](https://npmjs.org/package/ssh-server)
[![Downloads/week](https://img.shields.io/npm/dw/ssh-server.svg)](https://npmjs.org/package/ssh-server)
[![License](https://img.shields.io/npm/l/ssh-server.svg)](https://github.com/Troublor/ssh-server/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g ssh-server
$ ssh-server COMMAND
running command...
$ ssh-server (-v|--version|version)
ssh-server/1.2.0 darwin-x64 node-v14.15.3
$ ssh-server --help [COMMAND]
USAGE
  $ ssh-server COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`ssh-server autocomplete [SHELL]`](#ssh-server-autocomplete-shell)
* [`ssh-server commands`](#ssh-server-commands)
* [`ssh-server copy [SOURCE] [...] [TARGET]`](#ssh-server-copy-source--target)
* [`ssh-server help [COMMAND]`](#ssh-server-help-command)
* [`ssh-server port:close SERVER REMOTEPORT:LOCALPORT`](#ssh-server-portclose-server-remoteportlocalport)
* [`ssh-server port:open SERVER REMOTEPORT:LOCALPORT`](#ssh-server-portopen-server-remoteportlocalport)
* [`ssh-server shell [SERVER]`](#ssh-server-shell-server)
* [`ssh-server update [CHANNEL]`](#ssh-server-update-channel)

## `ssh-server autocomplete [SHELL]`

display autocomplete installation instructions

```
USAGE
  $ ssh-server autocomplete [SHELL]

ARGUMENTS
  SHELL  shell type

OPTIONS
  -r, --refresh-cache  Refresh cache (ignores displaying instructions)

EXAMPLES
  $ ssh-server autocomplete
  $ ssh-server autocomplete bash
  $ ssh-server autocomplete zsh
  $ ssh-server autocomplete --refresh-cache
```

_See code: [@oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete/blob/v0.3.0/src/commands/autocomplete/index.ts)_

## `ssh-server commands`

list all the commands

```
USAGE
  $ ssh-server commands

OPTIONS
  -h, --help              show CLI help
  -j, --json              display unfiltered api data in json format
  -x, --extended          show extra columns
  --columns=columns       only show provided columns (comma-separated)
  --csv                   output is csv format [alias: --output=csv]
  --filter=filter         filter property by partial string matching, ex: name=foo
  --hidden                show hidden commands
  --no-header             hide table header from output
  --no-truncate           do not truncate output to fit screen
  --output=csv|json|yaml  output in a more machine friendly format
  --sort=sort             property to sort by (prepend '-' for descending)
```

_See code: [@oclif/plugin-commands](https://github.com/oclif/plugin-commands/blob/v1.3.0/src/commands/commands.ts)_

## `ssh-server copy [SOURCE] [...] [TARGET]`

open server shell

```
USAGE
  $ ssh-server copy [SOURCE] [...] [TARGET]

OPTIONS
  -H, --host=host                  host of the server
  -P, --port=port                  port of the ssh server
  -h, --help                       show CLI help
  -i, --identityFile=identityFile  path to ssh identity file to logon server
  -p, --password=password          password to logon server
  -r, --recursive                  recursive copy
  -u, --username=username          username used to logon server
  --home=home                      home path on the server

ALIASES
  $ ssh-server cp

EXAMPLE
  $ ssh-server copy -r server:~/workspace ~/
```

_See code: [src/commands/copy.ts](https://github.com/Troublor/ssh-server/blob/v1.2.0/src/commands/copy.ts)_

## `ssh-server help [COMMAND]`

display help for ssh-server

```
USAGE
  $ ssh-server help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.1/src/commands/help.ts)_

## `ssh-server port:close SERVER REMOTEPORT:LOCALPORT`

close ssh local port forwarding

```
USAGE
  $ ssh-server port:close SERVER REMOTEPORT:LOCALPORT

ARGUMENTS
  SERVER                name of server predefined in config file
  REMOTEPORT:LOCALPORT  port forward pattern

OPTIONS
  -H, --host=host                  host of the server
  -P, --port=port                  port of the ssh server
  -h, --help                       show CLI help
  -i, --identityFile=identityFile  path to ssh identity file to logon server
  -p, --password=password          password to logon server
  -r, --recursive                  recursive copy
  -u, --username=username          username used to logon server
  --home=home                      home path on the server

EXAMPLE
  $ ssh-server port:close remotePort:localPort ...
```

_See code: [src/commands/port/close.ts](https://github.com/Troublor/ssh-server/blob/v1.2.0/src/commands/port/close.ts)_

## `ssh-server port:open SERVER REMOTEPORT:LOCALPORT`

open ssh local port forwarding

```
USAGE
  $ ssh-server port:open SERVER REMOTEPORT:LOCALPORT

ARGUMENTS
  SERVER                name of server predefined in config file
  REMOTEPORT:LOCALPORT  port forward pattern

OPTIONS
  -H, --host=host                  host of the server
  -P, --port=port                  port of the ssh server
  -h, --help                       show CLI help
  -i, --identityFile=identityFile  path to ssh identity file to logon server
  -p, --password=password          password to logon server
  -r, --recursive                  recursive copy
  -u, --username=username          username used to logon server
  --home=home                      home path on the server

EXAMPLE
  $ ssh-server port:open localPort:remotePort ...
```

_See code: [src/commands/port/open.ts](https://github.com/Troublor/ssh-server/blob/v1.2.0/src/commands/port/open.ts)_

## `ssh-server shell [SERVER]`

open server shell

```
USAGE
  $ ssh-server shell [SERVER]

ARGUMENTS
  SERVER  name of server predefined in config file

OPTIONS
  -H, --host=host                  host of the server
  -P, --port=port                  port of the ssh server
  -h, --help                       show CLI help
  -i, --identityFile=identityFile  path to ssh identity file to logon server
  -p, --password=password          password to logon server
  -r, --recursive                  recursive copy
  -u, --username=username          username used to logon server
  --home=home                      home path on the server

ALIASES
  $ ssh-server sh

EXAMPLE
  $ ssh-server shell [serverName]
```

_See code: [src/commands/shell.ts](https://github.com/Troublor/ssh-server/blob/v1.2.0/src/commands/shell.ts)_

## `ssh-server update [CHANNEL]`

update the ssh-server CLI

```
USAGE
  $ ssh-server update [CHANNEL]
```

_See code: [@oclif/plugin-update](https://github.com/oclif/plugin-update/blob/v1.3.10/src/commands/update.ts)_
<!-- commandsstop -->
