<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Movie extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'description', 'release', 'imgpath'];

    public function producer()
    {
        return $this->belongsTo(Producer::class);
    }

    public function genre()
    {
        return $this->belongsTo(Genre::class);
    }

    public function rate()
    {
        // return $this->hasMany(Rate::class);
        return $this->hasMany('App\Model\Rate','movie_id');
    }
}

