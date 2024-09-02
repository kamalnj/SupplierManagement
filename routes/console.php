<?php

use Illuminate\Support\Facades\Schedule;

Schedule::command('campagne:update-status')
    ->everySecond();

Schedule::command('contracts:update-statuses')->daily();
