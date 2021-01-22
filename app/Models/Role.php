<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'actor_id', 'movie_id'];

    public function actor() 
    {
        return $this->belongsTo('App\Models\Actor', 'actor_id');
    }

    public function movie()
    {
        return $this->belongsTo('App\Models\Movie', 'movie_id');
    }
}
