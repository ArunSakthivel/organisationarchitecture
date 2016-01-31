class CreateEmployeeDetails < ActiveRecord::Migration
  def change
    create_table :employee_details do |t|
      t.string :name
      t.string :dob
      t.string :yearofexpirence
      t.string :pic
      t.boolean :isVisibleChild
      t.integer :parent_id, default: 0  

      t.timestamps null: false
    end
  end
end
