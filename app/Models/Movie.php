<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Movie extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'description', 'release', 'genre_id', 'producer_id'];
    public $timestamps = false;
    public function producer()
    {
        return $this->belongsTo('App\Models\Producer', 'producer_id');
    }

    public function genre()
    {
        return $this->belongsTo('App\Models\Genre', 'genre_id');
    }
}

