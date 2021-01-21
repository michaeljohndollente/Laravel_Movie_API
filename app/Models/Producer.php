<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Producer extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'email'];
    protected $primaryKey = 'id';
    public $timestamps = false;
    public function movie()
    {
        return $this->hasMany(Movie::class);
    }
}
