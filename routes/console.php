<?php

use Illuminate\Support\Facades\Schedule;

Schedule::command('campagne:update-status')
    ->everySecond()
    ->runInBackground();


Schedule::command('contracts:update-statuses')->daily();
