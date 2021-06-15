<?php

namespace App\Http\Requests;



class EventRequest extends GlobalRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return array_merge(
            [
            'title' => 'required|string|max:40',
            'description' => 'required|string',
            'caldates' => 'required|array|min:1'
            ],
            $this->visibility
        );
    }
}