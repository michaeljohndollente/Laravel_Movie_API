<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rate extends Model
{
    use HasFactory;
    protected $fillable = ['rating', 'comment'];

    public function users()
    {
        // return $this->belongsTo(User::class);
        return $this->belongsTo('App\Model\User','user_id');
    }

    public function movie()
    {
        // return $this->belongsToMany(Movie::class);
        return $this->belongsToMany('App\Model\Movie','movie_id');
    }
}
