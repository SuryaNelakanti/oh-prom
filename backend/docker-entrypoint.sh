#!/bin/bash

python manage.py migrate --noinput || exit 1

# Adds reference/link of all static files to a single file.
python manage.py collectstatic --noinput --clear --link

exec "$@"
